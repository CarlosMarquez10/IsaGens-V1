import React from 'react'
import { useInspector } from "../InspectorContext";

export const TipoInspGeneral = () => {
  const { inspectorInicial } = useInspector();
    return (
        <div className="slide">
        <div className="titleAtentos">
          <h2>Tipos de Inspección General</h2>
        </div>
    
        <div className="atentosContenedor">
          <div className="contLblAtento">
            <label>Cúcuta-Drásticos</label>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: "70%" }}>
              70%
            </div>
          </div>
          <div className="cantidadAtento">
            <h4>2</h4>
          </div>
        </div>
    
        <div className="atentosContenedor">
          <div className="contLblAtento">
            <label>Cúcuta-Facturación</label>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: "70%" }}>
              70%
            </div>
          </div>
          <div className="cantidadAtento">
            <h4>2</h4>
          </div>
        </div>
    
        <div className="atentosContenedor">
          <div className="contLblAtento">
            <label>Cúcuta-Scr</label>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: "70%" }}>
              70%
            </div>
          </div>
          <div className="cantidadAtento">
            <h4>2</h4>
          </div>
        </div>
    
        <div className="atentosContenedor">
          <div className="contLblAtento">
            <label>Pamplona</label>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: "70%" }}>
              70%
            </div>
          </div>
          <div className="cantidadAtento">
            <h4>2</h4>
          </div>
        </div>
    
        <div className="atentosContenedor">
          <div className="contLblAtento">
            <label>Ocaña</label>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: "70%" }}>
              70%
            </div>
          </div>
          <div className="cantidadAtento">
            <h4>2</h4>
          </div>
        </div>
    
        <div className="atentosContenedor">
          <div className="contLblAtento">
            <label>Tibu-Pueblos</label>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: "70%" }}>
              70%
            </div>
          </div>
          <div className="cantidadAtento">
            <h4>2</h4>
          </div>
        </div>
    
        <div className="atentosContenedor">
          <div className="contLblAtento">
            <label>Tibu</label>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: "70%" }}>
              70%
            </div>
          </div>
          <div className="cantidadAtento">
            <h4>2</h4>
          </div>
        </div>
    
        <div className="atentosContenedor">
          <div className="contLblAtento">
            <label>Aguachica</label>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: "70%" }}>
              70%
            </div>
          </div>
          <div className="cantidadAtento">
            <h4>2</h4>
          </div>
        </div>
    
        <div className="atentosContenedor">
          <div className="contLblAtento">
            <label>Cúcuta-SSTA</label>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: "70%" }}>
              70%
            </div>
          </div>
          <div className="cantidadAtento">
            <h4>2</h4>
          </div>
        </div>    
    
        <div className="atentosContenedor">
          <div className="contLblAtento">
            <label>Aguachica-SSTA</label>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: "70%" }}>
              70%
            </div>
          </div>
          <div className="cantidadAtento">
            <h4>2</h4>
          </div>
        </div>  
    
        <div className="atentosContenedor">
          <div className="contLblAtento">
            <label>Cúcuta-Admon</label>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: "70%" }}>
              70%
            </div>
          </div>
          <div className="cantidadAtento">
            <h4>2</h4>
          </div>
        </div>  
    
      </div>
      )
}
