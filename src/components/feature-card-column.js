/** @jsx jsx */
import { jsx, Image, Box, Heading, Text } from "theme-ui";

export default function FeatureCardColumn({
  src,
  altText = "default alt text",
  title,
  text,
}) {
  return (
    <Box sx={styles.card}>
      <Image sx={styles.img} src={src} alt={altText} />

      <Box sx={styles.wrapper}>
        <Heading sx={styles.wrapper.title}>{title}</Heading>
        <Text sx={styles.wrapper.subTitle}>{text}</Text>
      </Box>
    </Box>
  );
}

const styles = {
  card: {
    display: "flex",
    alignItems: ["center", "flex-start"],
    flexDirection: "column",
    mb: -1,
    textAlign: ["center", null, "left"],
    px: [4, null, 0],
  },
  img: {
    mx: ["auto", null, 0],
    ml: ["auto", null, 0],
    mb: 4,
    width: ["60px", null, null, "80px", null, "100px"],
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    title: {
      color: "text_secondary",
      fontSize: 3,
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3],
    },
    subTitle: {
      color: "text_secondary",
      fontSize: 1,
      fontWeight: 400,
      lineHeight: "1.9",
    },
  },
};
