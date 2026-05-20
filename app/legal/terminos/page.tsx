export const metadata = { title: 'Términos del Servicio — Upgradia' }

export default function TerminosPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-black text-white mb-8">Términos del Servicio</h1>

      <div className="flex flex-col gap-8" style={{ color: '#ccc' }}>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">1. Definiciones</h2>
          <ul className="text-sm leading-relaxed flex flex-col gap-1">
            <li><span className="text-white font-semibold">"Plataforma"</span>: el sitio web y canales digitales de Upgradia.</li>
            <li><span className="text-white font-semibold">"Contenido digital"</span>: documentos/archivos electrónicos (p. ej., PDF, guías, listados/directorios de contactos, materiales formativos u otros intangibles).</li>
            <li><span className="text-white font-semibold">"Usuario/Cliente"</span>: persona que accede o compra en la Plataforma.</li>
            <li><span className="text-white font-semibold">"Entrega digital"</span>: puesta a disposición del Contenido digital mediante enlace de descarga, acceso en la nube o envío por correo electrónico.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">2. Objeto y aceptación</h2>
          <p className="text-sm leading-relaxed">
            Estos Términos regulan el acceso, uso y contratación de Contenido digital en Upgradia. Al usar la web o realizar una compra, el Usuario declara que ha leído y acepta íntegramente estos Términos y la Política de Privacidad.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">3. Capacidad y mayoría de edad</h2>
          <p className="text-sm leading-relaxed">
            Solo podrán contratar mayores de 18 años con plena capacidad legal. No se admitirán compras realizadas en nombre de terceros sin autorización expresa.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">4. Información previa a la contratación</h2>
          <p className="text-sm leading-relaxed">
            Las características esenciales, precio total (impuestos incluidos cuando proceda) y condiciones de cada producto constan en su ficha individual. Upgradia podrá corregir errores manifiestos de precio, descripción o disponibilidad y anular pedidos con devolución íntegra si existiera un error evidente.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">5. Naturaleza de los productos y Entrega digital</h2>
          <p className="text-sm leading-relaxed mb-2">
            Los productos son intangibles. <strong className="text-white">No se realizan envíos físicos.</strong>
          </p>
          <p className="text-sm leading-relaxed mb-2">
            La Entrega digital se efectúa normalmente de forma inmediata o en un plazo razonable tras confirmar el pago. Es imprescindible facilitar un correo válido y revisar la carpeta de spam/promociones.
          </p>
          <p className="text-sm leading-relaxed">
            Si el pago queda en revisión antifraude, la entrega podrá aplazarse hasta resolverse. Upgradia podrá solicitar verificación de identidad en casos de riesgo.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">6. Requisitos técnicos y disponibilidad</h2>
          <p className="text-sm leading-relaxed">
            El Usuario necesita un dispositivo compatible, conexión estable a Internet y, en su caso, lector de PDF y espacio suficiente. El Usuario es responsable de su entorno técnico (filtros de correo, bloqueos, firewalls). La Plataforma puede verse interrumpida temporalmente por mantenimiento, incidencias o fuerza mayor.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">7. Licencia de uso (personal e intransferible)</h2>
          <p className="text-sm leading-relaxed mb-2">
            La compra concede al Usuario una licencia de uso personal, limitada, no exclusiva e intransferible. Queda prohibido, sin autorización expresa y escrita de Upgradia:
          </p>
          <ul className="text-sm leading-relaxed list-[lower-alpha] list-inside flex flex-col gap-1">
            <li>compartir, revender, redistribuir, publicar o poner a disposición el Contenido digital;</li>
            <li>subirlo a repositorios, grupos, foros o nubes compartidas;</li>
            <li>eliminar marcas de agua, identificadores o medidas de protección.</li>
          </ul>
          <p className="text-sm leading-relaxed mt-2">
            Upgradia podrá incorporar marcas de agua/identificadores y conservar registros técnicos para prevenir filtraciones y acreditar entregas.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">8. Derecho de desistimiento en Contenido digital</h2>
          <p className="text-sm leading-relaxed">
            De conformidad con la Directiva 2011/83/UE y el Texto Refundido de la Ley General para la Defensa de los Consumidores y Usuarios en España, el Usuario consiente la entrega inmediata y reconoce la pérdida del derecho de desistimiento desde que comienza la ejecución (acceso o descarga). Esta información se muestra de forma clara en el proceso de compra (checkout).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">9. Reembolsos y cancelaciones</h2>
          <p className="text-sm leading-relaxed mb-2">
            Tras la Entrega digital no procede reembolso. Solo se valorará reembolso cuando exista:
          </p>
          <ul className="text-sm leading-relaxed list-disc list-inside flex flex-col gap-1 mb-2">
            <li>Fallo técnico comprobado e imputable a Upgradia que impida el acceso y no pueda resolverse tras soporte razonable; o</li>
            <li>Error de cobro/pedido atribuible a Upgradia.</li>
          </ul>
          <p className="text-sm leading-relaxed">
            No se admitirán reembolsos por expectativas personales, desconocimiento de lo adquirido o incidencias con terceros.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">10. Pruebas de entrega y gestión de disputas</h2>
          <p className="text-sm leading-relaxed mb-2">
            Upgradia podrá conservar y aportar evidencias técnicas (sellos de tiempo, IP, logs de acceso/descarga, confirmaciones de correo) para acreditar la Entrega digital y la ejecución del contrato, así como oponerse a contracargos injustificados.
          </p>
          <p className="text-sm leading-relaxed">
            El Usuario reconoce expresamente que la descarga o acceso acreditado constituye prueba válida de entrega. Si se inicia un contracargo tras haberse usado el Contenido, Upgradia podrá revocar la licencia, bloquear accesos y reclamar las cantidades debidas.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">11. Contenido de terceros y relaciones externas</h2>
          <p className="text-sm leading-relaxed">
            Algunos documentos incluyen contactos o enlaces de terceros con carácter meramente informativo. Upgradia no intermedia ni participa en tales relaciones y no responde por precios, calidades, plazos, condiciones o cumplimiento de esos terceros. Las interacciones externas son responsabilidad exclusiva del Usuario.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">12. Conductas prohibidas y seguridad</h2>
          <p className="text-sm leading-relaxed mb-2">Se prohíbe:</p>
          <ul className="text-sm leading-relaxed list-disc list-inside flex flex-col gap-1">
            <li>usar el sitio con fines ilícitos, fraudulentos o contrarios a derecho;</li>
            <li>suplantar identidades;</li>
            <li>realizar scraping masivo, ingeniería inversa o eludir medidas de seguridad;</li>
            <li>ceder o facilitar credenciales a terceros.</li>
          </ul>
          <p className="text-sm leading-relaxed mt-2">
            El incumplimiento podrá conllevar suspensión o resolución inmediata sin derecho a reembolso, además de posibles acciones legales.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">13. Exclusión de garantías y limitación de responsabilidad</h2>
          <p className="text-sm leading-relaxed mb-2">
            El Contenido digital tiene fines informativos y formativos; Upgradia no garantiza resultados económicos, profesionales o de otro tipo.
          </p>
          <p className="text-sm leading-relaxed mb-2">Upgradia no será responsable por:</p>
          <ul className="text-sm leading-relaxed list-[lower-roman] list-inside flex flex-col gap-1 mb-2">
            <li>pérdidas económicas, comerciales o reputacionales;</li>
            <li>incidencias en plataformas o servicios externos;</li>
            <li>mal uso o uso contrario a derecho;</li>
            <li>interrupciones razonables del servicio o fuerza mayor.</li>
          </ul>
          <p className="text-sm leading-relaxed">
            El límite máximo de responsabilidad será el importe efectivamente abonado por el producto afectado.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">14. Propiedad intelectual</h2>
          <p className="text-sm leading-relaxed">
            Los materiales son titularidad de Upgradia o se usan bajo licencia. Todos los derechos reservados. Cualquier uso no autorizado podrá dar lugar a responsabilidades civiles y/o penales.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">15. Actualizaciones de contenido y cambios en la oferta</h2>
          <p className="text-sm leading-relaxed">
            Upgradia podrá actualizar o sustituir archivos por versiones equivalentes o mejoradas y retirar contenidos por razones legales o de calidad, manteniendo una entrega funcional para el Usuario que ya adquirió el producto.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">16. Promociones, cupones y afiliación</h2>
          <p className="text-sm leading-relaxed">
            Los descuentos, cupones o ventajas promocionales están sujetos a sus términos específicos (vigencia, no acumulabilidad, límites). Upgradia podrá anular pedidos si detecta uso indebido o error evidente en una promoción.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">17. Cesión, no renuncia y totalidad del acuerdo</h2>
          <p className="text-sm leading-relaxed">
            Upgradia podrá ceder sus derechos u obligaciones conforme a la ley. El Usuario no podrá ceder su licencia sin permiso escrito. La no exigencia puntual de un derecho no supondrá renuncia futura. Estos Términos constituyen el acuerdo íntegro entre las partes.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">18. Nulidad parcial</h2>
          <p className="text-sm leading-relaxed">
            Si alguna cláusula fuese nula o inaplicable, el resto seguirá en vigor.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">19. Idioma, ley aplicable y jurisdicción</h2>
          <p className="text-sm leading-relaxed mb-2">
            El idioma jurídico vinculante es el español. En caso de traducciones, prevalecerá la versión en español.
          </p>
          <p className="text-sm leading-relaxed mb-2">
            Se aplicará la legislación española y europea. Las controversias con consumidores se someterán a los Juzgados y Tribunales del domicilio del consumidor; en otros casos, a los de la Comunidad de Madrid.
          </p>
          <p className="text-sm leading-relaxed">
            Plataforma ODR (UE):{' '}
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: '#5FFA3B' }}>
              https://ec.europa.eu/consumers/odr
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">20. Atención al cliente</h2>
          <p className="text-sm leading-relaxed">
            Soporte para entrega y acceso:{' '}
            <a href="mailto:info@upgradia.store" className="underline" style={{ color: '#5FFA3B' }}>info@upgradia.store</a>.
            No se incluye soporte sobre configuraciones de servicios/plataformas de terceros ni asesoramiento individualizado.
          </p>
        </section>

        <p className="text-xs" style={{ color: '#555' }}>Última actualización: 29/08/2025</p>
      </div>
    </div>
  )
}
