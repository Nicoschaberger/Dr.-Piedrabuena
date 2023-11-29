import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";

const CartWidget = () => {
  return (
    <>
      <Breadcrumb className="carro">

        <BreadcrumbItem >
          <Button color='#83BCFF'>
          <Link to={"/Person"}>
            ¿Quien soy?
          </Link>
          </Button>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <Button color='#83BCFF'>
          <Link to={"/Contact"}>
            Contacto
          </Link>
          </Button>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <Button color='#83BCFF'>
            <Link to={"/Carousel"}>
            Recomendaciones
            </Link>
          </Button>
        </BreadcrumbItem>

      </Breadcrumb>
    </>
  );
};

export default CartWidget;