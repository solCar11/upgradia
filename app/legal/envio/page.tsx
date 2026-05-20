export const metadata = { title: 'Política de Envío — Upgradia' }

export default function EnvioPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-black text-white mb-8">Política de Envío</h1>

      <div className="flex flex-col gap-8" style={{ color: '#ccc' }}>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">1. Naturaleza del producto</h2>
          <p className="text-sm leading-relaxed mb-2">
            Todos los productos ofrecidos en Upgradia son <strong className="text-white">100% digitales e intangibles</strong>. Entre ellos se incluyen:
          </p>
          <ul className="text-sm leading-relaxed list-disc list-inside flex flex-col gap-1 mb-2">
            <li>Documentos y guías en formato electrónico.</li>
            <li>Directorios y listados de contactos comerciales.</li>
            <li>Bibliotecas digitales, ebooks y materiales formativos.</li>
            <li>Archivos descargables en la nube.</li>
            <li>Accesos privados a contenidos digitales.</li>
          </ul>
          <p className="text-sm leading-relaxed font-semibold text-white">En ningún caso se realizan envíos físicos de productos.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">2. Método de entrega</h2>
          <p className="text-sm leading-relaxed mb-2">
            Una vez confirmada la compra y validado el pago, la entrega del producto se realiza mediante alguno de los siguientes métodos:
          </p>
          <ul className="text-sm leading-relaxed list-disc list-inside flex flex-col gap-1 mb-2">
            <li>Envío por correo electrónico con enlaces de acceso o descarga.</li>
            <li>Acceso directo a carpetas o plataformas de descarga protegidas.</li>
            <li>Activación de accesos digitales privados en un plazo máximo de 24–48 horas, en productos que requieran verificación manual.</li>
          </ul>
          <p className="text-sm leading-relaxed">
            El cliente debe asegurarse de proporcionar un correo electrónico válido y operativo, así como revisar las carpetas de spam o promociones en caso de no localizar el mensaje de entrega.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">3. Confirmación y plazos de entrega</h2>
          <ul className="text-sm leading-relaxed list-disc list-inside flex flex-col gap-1">
            <li>En la mayoría de los casos, la entrega es <strong className="text-white">inmediata</strong> tras el pago.</li>
            <li>En productos que requieran activación manual, el plazo podrá extenderse hasta <strong className="text-white">24–48 horas</strong> desde la recepción de los datos completos de la compra.</li>
            <li>Si el pago queda en revisión antifraude por parte de la pasarela, la entrega podrá aplazarse hasta que se complete la verificación.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">4. No se realizan envíos físicos</h2>
          <p className="text-sm leading-relaxed mb-2">El cliente declara y acepta expresamente que:</p>
          <ul className="text-sm leading-relaxed list-disc list-inside flex flex-col gap-1">
            <li>No recibirá productos en formato tangible ni por mensajería.</li>
            <li>Todo el contenido adquirido se entrega únicamente de manera digital.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">5. Datos necesarios para la entrega</h2>
          <p className="text-sm leading-relaxed mb-2">
            En determinados productos, puede ser necesario que el cliente complete un proceso de verificación tras la compra, aportando:
          </p>
          <ul className="text-sm leading-relaxed list-disc list-inside flex flex-col gap-1 mb-2">
            <li>Nombre y apellidos.</li>
            <li>Correo electrónico utilizado en la compra.</li>
            <li>Número de pedido.</li>
            <li>Comprobante o captura de la confirmación de compra.</li>
          </ul>
          <p className="text-sm leading-relaxed">
            Hasta completar correctamente este proceso, no podrá activarse el acceso al producto.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">6. Problemas de acceso y reintentos de entrega</h2>
          <p className="text-sm leading-relaxed mb-2">
            Si el cliente no recibe el acceso a su producto en un plazo máximo de 48 horas, deberá contactar con el equipo de soporte mediante:{' '}
            <a href="mailto:info@upgradia.store" className="underline" style={{ color: '#5FFA3B' }}>info@upgradia.store</a>
          </p>
          <p className="text-sm leading-relaxed">
            En caso de error técnico (p. ej., enlace de descarga incorrecto, archivo dañado o error de activación), Upgradia reintentará la entrega o reactivará el acceso sin coste adicional. Este reintento no supondrá la cancelación de la compra ni dará derecho automático a reembolso, salvo que el problema sea permanente, imputable a Upgradia y debidamente acreditado.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">7. Aceptación de esta política</h2>
          <p className="text-sm leading-relaxed">
            Al realizar una compra en la tienda de Upgradia, el cliente declara haber leído, entendido y aceptado esta Política de Envío, así como los Términos del Servicio y la Política de Devoluciones y Reembolsos publicadas en esta web.
          </p>
        </section>

        <p className="text-xs" style={{ color: '#555' }}>Última actualización: 29/08/2025</p>
      </div>
    </div>
  )
}
