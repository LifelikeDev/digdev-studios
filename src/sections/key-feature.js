/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";
import Performance from "assets/key-feature/performance.svg";
import Partnership from "assets/key-feature/partnership.svg";
import Subscription from "assets/key-feature/subscription.svg";
import Support from "assets/key-feature/support.svg";
// import FeatureCard from "components/feature-card";

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: "Performance",
    title: "Performance",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sint asperiores.",
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: "Reliance",
    title: "Reliance",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sint asperiores.",
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: "Lifetime services",
    title: "Lifetime services",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sint asperiores.",
  },
  {
    id: 4,
    imgSrc: Support,
    altText: "User-focused",
    title: "User-focused",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sint asperiores.",
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: "section.keyFeature" }} id="feature">
      <Container>
        <SectionHeader
          title="We are not just a business. We are realtime solutionists."
          slogan="Here’s what we have to show to the world"
        />

        <Grid sx={styles.grid}>
          {data.map(({ id, imgSrc, altText, title, text }) => (
            <FeatureCardColumn
              key={id}
              src={imgSrc}
              alt={altText}
              title={title}
              text={text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridGap: [
      "35px 0",
      null,
      "40px 40px",
      "50px 60px",
      "30px",
      "50px 40px",
      "55px 90px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(4,1fr)",
    ],
  },
};
