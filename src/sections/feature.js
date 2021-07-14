/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import FeatureCard from "components/feature-card.js";
import ModernTech from "assets/feature/rating.svg";
import Functional from "assets/feature/list.svg";
import Scalable from "assets/feature/purchase.svg";
import Tests from "assets/feature/trust.svg";

const data = [
  {
    id: 1,
    imgSrc: ModernTech,
    altText: "Modern technologies",
    title: "Modern technologies",
    text:
      "Dolor sit amet consectetur adipisicing elit. Facere quasi aspernatur error nesciunt sapiente modi voluptatum neque ut eveniet consectetur dolore, possimus voluptates omnis, nostrum beatae.",
  },
  {
    id: 2,
    imgSrc: Functional,
    altText: "Highly functional code",
    title: "Highly functional code",
    text:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere quasi aspernatur error nesciunt sapiente modi voluptatum neque ut eveniet consectetur dolore.",
  },
  {
    id: 3,
    imgSrc: Scalable,
    altText: "Scalable codebase",
    title: "Scalable codebase",
    text:
      "Eveniet dolore, lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere quasi aspernatur error nesciunt sapiente modi voluptatum neque ut.",
  },
  {
    id: 4,
    imgSrc: Tests,
    altText: "Tests and more tests",
    title: "Tests and more tests",
    text:
      "Ipsum lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere quasi aspernatur error nesciunt sapiente modi voluptatum neque ut eveniet consectetur.",
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: "section.feature" }}>
      <Container>
        <SectionHeader title="Software development as a business" />

        <Grid sx={styles.grid}>
          {data.map(({ id, imgSrc, altText, title, text }) => (
            <FeatureCard
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
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      "40px 0",
      null,
      "45px 30px",
      null,
      "60px 50px",
      "70px 50px",
      null,
      "80px 90px",
    ],
    gridTemplateColumns: ["repeat(1,1fr)", null, "repeat(2,1fr)"],
  },
};
