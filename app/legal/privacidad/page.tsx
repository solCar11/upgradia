export const metadata = { title: 'Política de Privacidad — Upgradia' }

export default function PrivacidadPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-black text-white mb-8">Política de Privacidad</h1>

      <div className="flex flex-col gap-8" style={{ color: '#ccc' }}>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">1. Responsable del tratamiento</h2>
          <p className="text-sm leading-relaxed">
            El responsable del tratamiento de los datos personales recogidos en este sitio web es Upgradia (upgradia.store). Por motivos de privacidad y seguridad, los datos identificativos completos se facilitarán a las autoridades competentes o a usuarios que lo soliciten de forma legalmente justificada.
          </p>
          <p className="text-sm leading-relaxed mt-2">
            Contacto:{' '}
            <a href="mailto:info@upgradia.store" className="underline" style={{ color: '#5FFA3B' }}>info@upgradia.store</a>
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">2. Datos que recogemos</h2>
          <p className="text-sm leading-relaxed mb-2">Podemos recoger los siguientes datos personales:</p>
          <ul className="text-sm leading-relaxed list-disc list-inside flex flex-col gap-1">
            <li>Nombre y apellidos (en formularios de contacto o compra).</li>
            <li>Dirección de correo electrónico.</li>
            <li>Datos de pago procesados por el proveedor de pagos (Stripe). Upgradia no almacena datos de tarjeta.</li>
            <li>Dirección IP y datos de navegación (logs técnicos).</li>
            <li>Información aportada voluntariamente a través del formulario de contacto.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">3. Finalidades y base legal del tratamiento</h2>
          <div className="flex flex-col gap-3">
            <div>
              <p className="text-sm font-semibold text-white">Gestión de compras y entrega digital</p>
              <p className="text-sm leading-relaxed">Base legal: ejecución de un contrato. Necesario para procesar el pedido y entregar el producto.</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Atención al cliente</p>
              <p className="text-sm leading-relaxed">Base legal: interés legítimo y ejecución del contrato. Para responder a consultas e incidencias.</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Cumplimiento legal y prevención de fraude</p>
              <p className="text-sm leading-relaxed">Base legal: obligación legal. Para conservar registros técnicos y acreditar entregas en caso de disputas.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">4. Conservación de los datos</h2>
          <p className="text-sm leading-relaxed">
            Los datos asociados a transacciones se conservarán durante el tiempo necesario para el cumplimiento de obligaciones legales y fiscales (mínimo 5 años conforme a la normativa española). Los datos de contacto se eliminarán cuando ya no sean necesarios para la finalidad para la que fueron recogidos.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">5. Cesión de datos a terceros</h2>
          <p className="text-sm leading-relaxed mb-2">
            Upgradia no cede datos personales a terceros salvo en los siguientes casos:
          </p>
          <ul className="text-sm leading-relaxed list-disc list-inside flex flex-col gap-1">
            <li><strong className="text-white">Stripe</strong>: procesador de pagos. Sus prácticas de privacidad se rigen por su propia política.</li>
            <li><strong className="text-white">Autoridades competentes</strong>: cuando sea requerido por ley.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">6. Tus derechos</h2>
          <p className="text-sm leading-relaxed mb-2">Conforme al RGPD y la LOPDGDD, tienes derecho a:</p>
          <ul className="text-sm leading-relaxed list-disc list-inside flex flex-col gap-1 mb-2">
            <li><strong className="text-white">Acceso</strong>: conocer qué datos tratamos sobre ti.</li>
            <li><strong className="text-white">Rectificación</strong>: corregir datos inexactos o incompletos.</li>
            <li><strong className="text-white">Supresión</strong>: solicitar la eliminación de tus datos cuando no sean necesarios.</li>
            <li><strong className="text-white">Oposición</strong>: oponerte al tratamiento basado en interés legítimo.</li>
            <li><strong className="text-white">Portabilidad</strong>: recibir tus datos en formato estructurado.</li>
            <li><strong className="text-white">Limitación</strong>: solicitar la restricción del tratamiento en determinadas circunstancias.</li>
          </ul>
          <p className="text-sm leading-relaxed">
            Para ejercer cualquiera de estos derechos, escríbenos a{' '}
            <a href="mailto:info@upgradia.store" className="underline" style={{ color: '#5FFA3B' }}>info@upgradia.store</a>.
            También puedes presentar una reclamación ante la Agencia Española de Protección de Datos (aepd.es).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">7. Seguridad</h2>
          <p className="text-sm leading-relaxed">
            Adoptamos medidas técnicas y organizativas adecuadas para proteger tus datos frente a accesos no autorizados, pérdida o alteración. Los pagos se procesan mediante cifrado SSL a través de Stripe; Upgradia no accede ni almacena datos de tarjetas bancarias.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">8. Cookies</h2>
          <p className="text-sm leading-relaxed">
            Este sitio puede utilizar cookies técnicas estrictamente necesarias para el funcionamiento de la tienda (sesión, carrito). No utilizamos cookies de publicidad ni rastreo de terceros en esta fase.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">9. Cambios en esta política</h2>
          <p className="text-sm leading-relaxed">
            Upgradia se reserva el derecho de actualizar esta Política de Privacidad. Los cambios se publicarán en esta misma página con la fecha de última actualización.
          </p>
        </section>

        <p className="text-xs" style={{ color: '#555' }}>Última actualización: 29/08/2025</p>
      </div>
    </div>
  )
}
