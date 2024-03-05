import { Container } from "semantic-ui-react";
import { BasicLayout } from "@/layouts";
import { Home } from "@/components/Home";
import { Separator, BarTrust, BannerAd, Seo } from "@/components/Shared";

const platformsId = {
  playstation: 1,
  xbox: 2,
  nintendo: 3,
  pc: 4,
};

export default function HomePage() {
  return (
    <>
      <Seo />

      <BasicLayout>
        <Home.BannerLastGamePublished />

        <Separator height={100} />

        <Container>
          <Home.LatestGames title="Ultimos lanzamientos" />
        </Container>

        <Separator height={100} />

        <BarTrust />

        <Separator height={100} />

        <Container>
          <Home.LatestGames
            title="Cocina"
            limit={3}
            platformId={platformsId.playstation}
          />
        </Container>

        <Separator height={100} />

        <BannerAd
          title="Registrate y obten los mejores precios"
          subtitle="¡Compara con otras tiendas Online!"
          btnTitle="Entrar ahora"
          btnLink="/account"
          image="/images/img01.png"
        />

        <Separator height={50} />

        <Container>
          <Home.LatestGames
            title="Belleza"
            limit={3}
            platformId={platformsId.xbox}
          />
        </Container>

        <Separator height={100} />
      </BasicLayout>
    </>
  );
}
