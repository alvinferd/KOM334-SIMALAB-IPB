import Image from "next/image";

import { Grid, Box, Typography, Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TimeToLeave } from "@material-ui/icons";

import LabCard from "@/components/surfaces/LabCard";

const useStyles = makeStyles((theme) => ({
  detailItem: {
    background: "#F7FAFF",
    border: "1px solid #E0E4EB",
    borderRadius: 8,
    padding: theme.spacing(1.5, 3.5),
  },
}));

function LabCardInventaris({ title, subtitle, type, code, lab, stock, src }) {
  const classes = useStyles();
  return (
    <LabCard title="Keterangan" noPadding>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        p={2}
        pb={0}
        mb={2}
      >
        <Box position="relative" height={160} width={160}>
          <Image src={src} alt={TimeToLeave} layout="fill" objectFit="cover" />
        </Box>
        <Box textAlign="center" mt={2} mb={1}>
          <Typography variant="h4" component="p">
            {title}
          </Typography>
          <Typography variant="body1" component="p" color="textSecondary">
            {subtitle}
          </Typography>
        </Box>
        {type.map((label) => {
          return (
            <Chip
              key={label}
              size="small"
              variant="outlined"
              color="primary"
              label={label}
            />
          );
        })}
      </Box>
      <Grid container className={classes.detailItem}>
        <Grid
          container
          item
          xs={4}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Typography color="textSecondary">Kode barang</Typography>
          <Typography>{code}</Typography>
        </Grid>
        <Grid
          container
          item
          xs={4}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Typography color="textSecondary">Lab</Typography>
          <Typography>{lab}</Typography>
        </Grid>
        <Grid
          container
          item
          xs={4}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Typography color="textSecondary">Jumlah Stok</Typography>
          <Typography>{stock}</Typography>
        </Grid>
      </Grid>
    </LabCard>
  );
}
export default LabCardInventaris;
