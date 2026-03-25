/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import panoramicImg from './assets/panoramic.png';

const policyData = {
  header: {
    title: "Política de Privacidad",
    subtitle: "Adventist Player"
  },
  sections: [
    {
      id: "1",
      title: "1. Introducción",
      content: [
        "Última actualización: 25 de marzo de 2026.",
        "En Adventist Player, valoramos tu privacidad. Esta política describe cómo manejamos la información cuando utilizas nuestra aplicación móvil. Al usar la app, aceptas las prácticas descritas aquí."
      ]
    },
    {
      id: "2",
      title: "2. Información que Recopilamos",
      content: [
        "<span class=\"u-text-bold\">Datos Personales:</span> Adventist Player no requiere registro. No recopilamos nombres, correos electrónicos, números de teléfono ni direcciones físicas.",
        "<span class=\"u-text-bold\">Datos de Uso:</span> Recopilamos datos anónimos sobre el rendimiento de la app (errores de cierre o latencia de streaming) a través de herramientas estándar como Firebase Crashlytics para mejorar tu experiencia técnica.",
        "<span class=\"u-text-bold\">Identificadores de Dispositivo:</span> Podemos acceder a identificadores anónimos del dispositivo para funciones de Google Cast y gestión de estado de audio."
      ]
    },
    {
      id: "3",
      title: "3. Uso de la Información",
      content: [
        "La información técnica recopilada se utiliza exclusivamente para:"
      ],
      list: [
        "Garantizar que el streaming de audio funcione correctamente.",
        "Mantener la estabilidad de la aplicación en diferentes versiones de Android.",
        "Permitir el uso del Temporizador de Apagado (Sleep Timer) y controles de reproducción."
      ]
    },
    {
      id: "4",
      title: "4. Menores de Edad (Audiencia Infantil)",
      content: [
        "Nuestra aplicación está dirigida a un público general, incluyendo familias. No recopilamos conscientemente información personal de niños menores de 13 años. Si eres padre o tutor y crees que hemos recopilado datos sin tu consentimiento, contáctanos para eliminarlos de inmediato."
      ]
    },
    {
      id: "5",
      title: "5. Servicios de Terceros",
      content: [
        "La aplicación utiliza servicios de terceros que pueden recopilar información utilizada para identificarte:"
      ],
      list: [
        "<span class=\"u-text-bold\">Google Play Services:</span> Para la distribución y actualizaciones.",
        "<span class=\"u-text-bold\">Firebase Crashlytics:</span> Para reportes de errores técnicos.",
        "<span class=\"u-text-bold\">Streams de Radio:</span> Al conectar con señales como Unión Radio o Nuevo Tiempo, tu dirección IP es visible para los servidores de la emisora (como en cualquier sitio web de radio), pero Adventist Player no almacena esta información."
      ]
    },
    {
      id: "6",
      title: "6. Permisos del Dispositivo",
      content: [
        "Solicitamos solo los permisos mínimos necesarios:"
      ],
      list: [
        "<span class=\"u-text-bold\">Internet:</span> Para recibir el streaming de las radios.",
        "<span class=\"u-text-bold\">Estado de Red:</span> Para pausar la música si pierdes la conexión.",
        "<span class=\"u-text-bold\">Notificaciones:</span> Para mostrar los controles de reproducción en la barra de estado (API 26+)."
      ]
    },
    {
      id: "7",
      title: "7. Cambios en esta Política",
      content: [
        "Podemos actualizar nuestra Política de Privacidad ocasionalmente. Te recomendamos revisar esta página periódicamente para ver cualquier cambio."
      ]
    },
    {
      id: "8",
      title: "8. Contacto",
      content: [
        "Si tienes preguntas sobre esta política, puedes contactarnos en:",
        "Correo electrónico: samuel.cusi@upeu.edu.pe"
      ]
    }
  ]
};

export default function App() {
  return (
    <div className="o-container">
      <div className="c-panoramic">
        <img src={panoramicImg} alt="Vista panorámica" className="c-panoramic__image" />
      </div>
      <header className="c-header">
        <h1 className="c-header__title">{policyData.header.title}</h1>
      </header>

      <main className="o-layout">
        {policyData.sections.map((section) => (
          <section key={section.id} className="c-policy-section">
            <h2 className="c-policy-section__title">{section.title}</h2>
            <div className="c-policy-section__content">
              {section.content.map((paragraph, index) => (
                <p 
                  key={index} 
                  dangerouslySetInnerHTML={{ __html: paragraph }} 
                  className={section.list && index === section.content.length - 1 ? "u-margin-bottom-none" : ""}
                />
              ))}
              {section.list && (
                <ul className="c-policy-section__list">
                  {section.list.map((item, index) => (
                    <li key={index} className="c-policy-section__list-item" dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              )}
            </div>
          </section>
        ))}
      </main>

      <footer className="c-footer">
        <p>&copy; {new Date().getFullYear()} Adventist Player. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
