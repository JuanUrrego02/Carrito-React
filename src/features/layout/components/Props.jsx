import { Box, Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";

function getImageUrl(person) {
  return `https://i.imgur.com/${person.imageId}s.jpg`;
}

function Avatar({ person, size }) {
  return (
    <Card sx={{ maxWidth: 200, textAlign: "center", p: 2 }}>
      <CardMedia
        component="img"
        image={getImageUrl(person)}
        alt={person.name}
        sx={{
          width: size,
          height: size,
          borderRadius: "50%",
          margin: "auto",
          objectFit: "cover"
        }}
      />
      <CardContent>
        <Typography variant="h6">{person.name}</Typography>
      </CardContent>
    </Card>
  );
}

export default function Props() {
  const people = [
    { name: "Katsuko Saruhashi", imageId: "YfeOqp2", size: 120 },
    { name: "Aklilu Lemma", imageId: "OKS67lh", size: 120 },
    { name: "Lin Lanying", imageId: "1bX5QH6", size: 120 }
  ];

  return (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={4} justifyContent="center">
        {people.map((person, index) => (
          <Grid item key={index}>
            <Avatar person={person} size={person.size} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}