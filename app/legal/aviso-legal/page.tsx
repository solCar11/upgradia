export const metadata = { title: 'Aviso Legal — Upgradia' }

export default function AvisoLegalPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-black text-white mb-8">Aviso Legal</h1>

      <div className="flex flex-col gap-8" style={{ color: '#ccc' }}>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">1. Titularidad del sitio web</h2>
          <p className="text-sm leading-relaxed mb-3">
            El presente sitio web <span className="text-white">upgradia.store</span> pertenece al responsable legal de Upgradia.
          </p>
          <p className="text-sm leading-relaxed mb-3">
            Por motivos de privacidad y seguridad, los datos identificativos completos del titular (nombre, NIF y domicilio fiscal) no se muestran públicamente, pero se facilitarán a:
          </p>
          <ul className="text-sm leading-relaxed list-disc list-inside flex flex-col gap-1 mb-3">
            <li>Las autoridades competentes que lo requieran, o</li>
            <li>Los usuarios que lo soliciten de forma legalmente justificada y conforme a derecho.</li>
          </ul>
          <p className="text-sm leading-relaxed">
            Puedes ponerte en contacto con nosotros en:{' '}
            <a href="mailto:info@upgradia.store" className="underline" style={{ color: '#5FFA3B' }}>info@upgradia.store</a>
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">2. Objeto del sitio web</h2>
          <p className="text-sm leading-relaxed mb-3">
            Este sitio web tiene como finalidad la comercialización y entrega de productos digitales intangibles, tales como:
          </p>
          <ul className="text-sm leading-relaxed list-disc list-inside flex flex-col gap-1 mb-3">
            <li>Documentos electrónicos y guías.</li>
            <li>Directorios y listados de contactos comerciales.</li>
            <li>Bibliotecas digitales, ebooks y materiales formativos.</li>
            <li>Archivos descargables y accesos digitales privados.</li>
          </ul>
          <p className="text-sm leading-relaxed">En ningún caso se realizan envíos físicos.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">3. Condiciones de uso</h2>
          <p className="text-sm leading-relaxed mb-3">
            El acceso y uso de este sitio atribuye la condición de Usuario e implica la aceptación plena de este Aviso Legal. El Usuario se compromete a:
          </p>
          <ul className="text-sm leading-relaxed list-disc list-inside flex flex-col gap-1">
            <li>No utilizar el sitio con fines ilícitos, fraudulentos o que vulneren derechos de terceros.</li>
            <li>No realizar actos que puedan dañar, inutilizar o sobrecargar el sitio web.</li>
            <li>Aportar datos veraces y mantenerlos actualizados en procesos de compra y contacto.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">4. Propiedad intelectual e industrial</h2>
          <p className="text-sm leading-relaxed">
            Todos los contenidos de este sitio (textos, manuales, PDFs, imágenes, logotipos, diseño, estructura y software) son propiedad de Upgradia o se usan con licencia. Está prohibida la reproducción, distribución, comunicación pública, transformación o explotación, total o parcial, sin autorización expresa y por escrito.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">5. Exención de responsabilidades</h2>
          <ul className="text-sm leading-relaxed list-disc list-inside flex flex-col gap-2">
            <li>El contenido digital se ofrece con fines informativos y formativos, sin garantizar resultados económicos ni profesionales.</li>
            <li>Upgradia no se hace responsable del mal uso que los usuarios hagan de los productos.</li>
            <li>Upgradia no responde de los contenidos de páginas externas enlazadas desde este sitio.</li>
            <li>El Usuario asume toda responsabilidad derivada del uso de información, directorios o accesos incluidos en los productos adquiridos.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">6. Protección de datos personales</h2>
          <p className="text-sm leading-relaxed">
            El tratamiento de los datos personales recogidos en la web se regula en la Política de Privacidad, la cual forma parte integrante de este Aviso Legal.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">7. Legislación y jurisdicción aplicables</h2>
          <p className="text-sm leading-relaxed">
            Este sitio web se rige por la legislación española y europea. En caso de controversia, se dará preferencia a los Juzgados y Tribunales del domicilio del consumidor cuando así lo exija la normativa vigente. Para otros supuestos, las partes se someterán a los Juzgados y Tribunales de la Comunidad de Madrid.
          </p>
        </section>

        <p className="text-xs" style={{ color: '#555' }}>Última actualización: 29/08/2025</p>
      </div>
    </div>
  )
}
