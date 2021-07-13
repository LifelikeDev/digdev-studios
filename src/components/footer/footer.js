/** @jsx jsx */
import { jsx, Box, Container, Image, Text } from "theme-ui";
import { Link } from "components/link";
import data from "./footer.data";
import FooterLogo from "assets/dev-logo.svg";

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Container>
        <Box sx={styles.footer.footerBottomArea}>
          <Link path="/">
            <Image
              src={FooterLogo}
              alt="logo"
              sx={{ variant: "links.logoBottom" }}
            />
          </Link>

          <Box sx={styles.footer.menus}>
            <nav>
              {data.menuItem.map(({ path, label }, index) => (
                <Link
                  key={index}
                  path={path}
                  label={label}
                  sx={styles.footer.link}
                />
              ))}
            </nav>
          </Box>

          <Text sx={styles.footer.copyright}>
            &copy; {new Date().getFullYear()} Navian
          </Text>
        </Box>
      </Container>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "background_blue",
    footerBottomArea: {
      borderTop: "1px solid",
      borderTopColor: "border_color",
      display: "flex",
      pt: [7, null, 8],
      pb: ["40px", null, "100px"],
      textAlign: "center",
      flexDirection: "column",
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      },
    },

    link: {
      fontSize: [1, "15px"],
      color: "text",
      fontWeight: "400",
      mb: 2,
      cursor: "pointer",
      transition: "all 0.35s",
      display: "block",
      textDecoration: "none",
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ":hover": {
        color: "primary",
      },
    },
    copyright: {
      color: "text",
      fontSize: [1, "13px"],
      letterSpacing: "2px",
      width: "100%",
    },
  },
};
