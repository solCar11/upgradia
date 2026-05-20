export const metadata = { title: 'Política de Devoluciones — Upgradia' }

export default function DevolucionesPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-black text-white mb-8">Política de Devoluciones y Reembolsos</h1>

      <div className="flex flex-col gap-8" style={{ color: '#ccc' }}>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">1. Naturaleza de los productos</h2>
          <p className="text-sm leading-relaxed">
            En Upgradia ofrecemos <strong className="text-white">productos digitales intangibles</strong> (documentos, guías, directorios de contactos, bibliotecas digitales y otros recursos formativos en formato electrónico). Dada su naturaleza, <strong className="text-white">no se aceptan devoluciones ni cancelaciones</strong> una vez realizada la compra y entregado el acceso.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">2. Base legal</h2>
          <p className="text-sm leading-relaxed mb-2">
            De acuerdo con el artículo 103 del Texto Refundido de la Ley General para la Defensa de los Consumidores y Usuarios (TRLGDCU), el derecho de desistimiento no aplica en contenidos digitales cuando:
          </p>
          <ul className="text-sm leading-relaxed list-disc list-inside flex flex-col gap-1 mb-2">
            <li>El suministro ha comenzado con el previo consentimiento expreso del consumidor, y</li>
            <li>El consumidor ha reconocido que pierde su derecho de desistimiento una vez iniciada la ejecución (acceso o descarga).</li>
          </ul>
          <p className="text-sm leading-relaxed">
            Al realizar una compra en la web de Upgradia, el cliente otorga su consentimiento expreso para la entrega inmediata y acepta que no podrá ejercer el derecho de desistimiento tras acceder al producto.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">3. Reembolsos en casos excepcionales</h2>
          <p className="text-sm leading-relaxed mb-2">
            Solo se valorará un reembolso en las siguientes situaciones excepcionales y debidamente verificadas:
          </p>
          <ul className="text-sm leading-relaxed list-disc list-inside flex flex-col gap-1 mb-3">
            <li>El cliente no ha recibido acceso al producto transcurridas 72 horas desde la compra y, tras reclamarlo, persiste la incidencia.</li>
            <li>El producto entregado no corresponde en absoluto con la descripción publicada en la web.</li>
            <li>Existe un fallo técnico comprobado e imputable a Upgradia que impide de manera permanente el acceso al producto adquirido.</li>
          </ul>
          <p className="text-sm leading-relaxed mb-2">En ningún caso se admitirán reembolsos por:</p>
          <ul className="text-sm leading-relaxed list-disc list-inside flex flex-col gap-1">
            <li>Expectativas personales no cumplidas.</li>
            <li>Desconocimiento de las características del producto.</li>
            <li>Mal uso por parte del cliente.</li>
            <li>Incidencias con proveedores o plataformas externas.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">4. Documentación necesaria</h2>
          <p className="text-sm leading-relaxed mb-2">
            Para evaluar un reembolso excepcional, el cliente deberá aportar:
          </p>
          <ul className="text-sm leading-relaxed list-disc list-inside flex flex-col gap-1 mb-2">
            <li>Número de pedido.</li>
            <li>Correo electrónico de compra.</li>
            <li>Capturas o pruebas que acrediten el error técnico o la falta de acceso.</li>
          </ul>
          <p className="text-sm leading-relaxed">
            Todas las solicitudes serán analizadas individualmente. Upgradia se reserva el derecho de aceptar o denegar el reembolso tras verificar la información aportada.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">5. Pruebas de entrega y contracargos</h2>
          <p className="text-sm leading-relaxed">
            El cliente reconoce que la descarga o acceso acreditado constituye prueba válida de entrega del producto digital. Upgradia podrá aportar registros técnicos (logs, correos de confirmación, accesos, sellos de tiempo, IP) en caso de disputas o contracargos para demostrar la correcta ejecución del contrato.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">6. Importante</h2>
          <p className="text-sm leading-relaxed mb-2">El cliente entiende y acepta que:</p>
          <ul className="text-sm leading-relaxed list-disc list-inside flex flex-col gap-1">
            <li>Los productos de Upgradia son digitales y no pueden "devolverse" una vez entregados.</li>
            <li>Su uso y aprovechamiento dependen exclusivamente de la responsabilidad del cliente.</li>
            <li>Una vez recibido el acceso, la compra es definitiva y no reembolsable, salvo en los supuestos excepcionales regulados en este documento.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">7. Contacto</h2>
          <p className="text-sm leading-relaxed">
            Para consultas relacionadas con esta política, el cliente puede contactar a través de:{' '}
            <a href="mailto:info@upgradia.store" className="underline" style={{ color: '#5FFA3B' }}>info@upgradia.store</a>
          </p>
        </section>

        <p className="text-xs" style={{ color: '#555' }}>Última actualización: 29/08/2025</p>
      </div>
    </div>
  )
}
