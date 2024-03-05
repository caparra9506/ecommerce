import Head from "next/head";

export function Seo(props) {
  const {
    title = "Flomil Colombia - Productos importados al detal y mayorista",
    description = "Precios especiales para emprendedores. ¡Compra por WhatsApp ahora!",
  } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta property="description" content={description} />
    </Head>
  );
}
