import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Link } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#000",
    color: "#fff",
    padding: theme.spacing(3),
    textAlign: "center",
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(1),
  },
  icon: {
    marginRight: theme.spacing(1),
    fontSize: 24,
    color: "#fff",
  },
  contactInfo: {
    marginTop: theme.spacing(2),
  },
  copyright: {
    marginTop: theme.spacing(2),
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="h5">Kelvin Antonio</Typography>
      <div className={classes.socialIcons}>
        <Link href="https://www.facebook.com" target="_blank" rel="noopener">
          <FacebookIcon className={classes.icon} />
        </Link>
        <Link href="https://www.twitter.com" target="_blank" rel="noopener">
          <TwitterIcon className={classes.icon} />
        </Link>
        <Link href="https://www.instagram.com" target="_blank" rel="noopener">
          <InstagramIcon className={classes.icon} />
        </Link>
      </div>
      <div className={classes.contactInfo}>
        <Typography variant="body2">Phone: +1 123-456-7890</Typography>
        <Typography variant="body2">Address: 123 Main St, City, Country</Typography>
      </div>
      <Typography variant="body2" className={classes.copyright}>
        &copy; {new Date().getFullYear()} Kelvin Antonio. All rights reserved.
      </Typography>
    </footer>
  );
};

export default Footer;
