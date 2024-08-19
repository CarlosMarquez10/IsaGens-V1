import React, { useEffect, useState } from "react";

// Definir los días festivos del año
const festivos = [
  "2024-01-01", // Año Nuevo
  "2024-03-25", // Lunes Santo
  "2024-03-28", // Jueves Santo
  "2024-03-29", // Viernes Santo
  "2024-07-20", // Día de la Independencia
  "2024-05-01", // Día del Trabajador
  "2024-11-11", // Independencia de Cartagena
  "2024-12-25" // Navidad
];

// Función para calcular los días hábiles del mes actual
const calcularDiasHabiles = () => {
  const diasHabiles = [];
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let day = 1; day <= daysInMonth; day++) {
    const currentDate = new Date(year, month, day);
    const dayOfWeek = currentDate.getDay();
    const isSunday = dayOfWeek === 0;
    const isFestivo = festivos.includes(currentDate.toISOString().split("T")[0]);

    // Considerar días hábiles de lunes a sábado, excluyendo domingos y festivos
    if (!isSunday && !isFestivo) {
      diasHabiles.push(currentDate);
    }
  }
  return diasHabiles;
};

// Función para obtener el número de semana del año
const getWeekNumber = (date) => {
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
};

// Función para calcular la cantidad de inspecciones por semana
const CantidadPorDiaLaboral = (constInsp) => {
  const diasHabiles = calcularDiasHabiles();
  const semanas = [];
  let semanaActual = { dias: 0, cantidad: 0 };
  let currentWeekNumber = diasHabiles[0] ? getWeekNumber(diasHabiles[0]) : 0;
  let weekCount = 1;
  let totalCantidad = 0;

  diasHabiles.forEach(dia => {
    const semanaDia = getWeekNumber(dia);

    if (semanaDia !== currentWeekNumber) {
      semanas.push({ [`semana_${weekCount}`]: semanaActual });
      semanaActual = { dias: 0, cantidad: 0 };
      currentWeekNumber = semanaDia;
      weekCount++;
    }

    semanaActual.dias += 1;
    semanaActual.cantidad = Math.round(semanaActual.dias * constInsp);
  });

  semanas.push({ [`semana_${weekCount}`]: semanaActual });

  totalCantidad = semanas.reduce((acc, semana) => {
    const key = Object.keys(semana)[0];
    return acc + semana[key].cantidad;
  }, 0);

  return totalCantidad;
};

const CantiInsp = {
  Supervisor: 3.33,
  "Auxiliar-Supervisor": 3.33,
  TecnologoSyso: 4.40,
  ProfesionalSyso: 3.14,
  Coordinador: 0.83,
};

export const InspecionesGenerales = ({ inspectorData }) => {
  const [totalInspProgramadas, setTotalInspProgramadas] = useState(0);

  useEffect(() => {
    const valorPorRol = CantiInsp[inspectorData?.Rol] || 0;
    const totalInsp = inspectorData?.Cantidad_Inspecciones;
    setTotalInspProgramadas(totalInsp);
  }, [inspectorData]);

  const cantidadInspRealizadas = inspectorData?.Cantidad_Inpeccionados || 0;
  const cantidadRestante = Math.max(totalInspProgramadas - cantidadInspRealizadas, 0);

  // Calcular el porcentaje de progreso
  const progressPercentage = totalInspProgramadas > 0 
    ? Math.min((cantidadInspRealizadas / totalInspProgramadas) * 100, 100) 
    : 0;

  // Agrupar las inspecciones por TipoInspeccion y contar la cantidad de cada tipo
  const motivoDeInspeccion = inspectorData?.MotivoDeInspeccion || [];
  const tipoInspeccionCounts = motivoDeInspeccion.reduce((acc, { TipoInspeccion }) => {
    acc[TipoInspeccion] = (acc[TipoInspeccion] || 0) + 1;
    return acc;
  }, {});

  const tipoInspeccionList = Object.entries(tipoInspeccionCounts).map(([tipo, cantidad], index) => (
    <div key={index} className="containerEstadoInspecciones">
      <h5><span className="span1">{index + 1}.</span> <span className="span2">{tipo}</span>  <span className="span3">cantidad: {cantidad}</span></h5>
    </div>
  ));

  return (
    <div className="slide">
      <div className="titleAtentos">
        <h2>Estado de Inspecciones</h2>
      </div>

      <div className="atentosContenedor">
        <div className="contLblAtento">
          <label>{inspectorData?.Proceso}</label>
        </div>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progressPercentage}%` }}>
            {progressPercentage.toFixed(2)}%
          </div>
        </div>
        <div className="cantidadAtento">
          <h4>{cantidadInspRealizadas}/{totalInspProgramadas}</h4>
        </div>
      </div>
      <div className="contenedorDetalleAtento">
        {tipoInspeccionList}
      </div>
    </div>
  );
};
