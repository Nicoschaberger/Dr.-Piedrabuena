import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Image,
    Stack,
    Heading,
    Text,
    Button,
    Divider,
    ButtonGroup,
  } from "@chakra-ui/react";
  
  const Person = () => {
    return (
      <>
        <Card>
          <CardBody className="stack">
            <Image src="./Img/Maca.jpg" alt="Profesional" borderRadius="lg" className="animate__zoomIn" />
            <Stack className="animate__lightSpeedInRight">
              <Heading size="md">Od. Macarena Piedrabuena</Heading>
              <Text>
                Macarena Piedrabuena, matricula 3872/01.
                Odontologa profesional desde el año 2019, recibida de la Universidad Nacional de Córdoba.
                Actualmente, me dedico a la rama de Odontopediatria, Ortopedia y Ortodoncia.
                Me apasiona mi profesión y por eso busco, día a día, adquirir nuevas herramientas para brindar un trabajo responsable y satifactorio para el paciente.
              </Text>
            </Stack>
          </CardBody>
        </Card>
      </>
    );
  };
  
  export default Person;
  