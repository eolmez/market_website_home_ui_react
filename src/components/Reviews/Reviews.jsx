import {
  CardHeader,
  CardsWrapper,
  Card,
  CustomerImg,
  ReviewsWrapper,
} from "./ReviewsStyles";
import { H1, PText } from "../../globalStyles";

const Reviews = () => {
  return (
    <ReviewsWrapper>
      <H1>Müşterilerimiz ne düşünüyor?</H1>
      <CardsWrapper>
        <Card>
          <CardHeader>
            <CustomerImg />
            <PText autohor>Sevgi Yılmaz</PText>
          </CardHeader>
          <PText review>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            pariatur omnis inventore magnam, non velit! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Delectus pariatur omnis inventore
            magnam, non velit!"
          </PText>
        </Card>
        <Card>
          <CardHeader>
            <CustomerImg />
            <PText author>Sevgi Yılmaz</PText>
          </CardHeader>
          <PText review>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            pariatur omnis inventore magnam, non velit! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Delectus pariatur omnis inventore
            magnam, non velit!"
          </PText>
        </Card>
        <Card>
          <CardHeader>
            <CustomerImg />
            <PText author>Sevgi Yılmaz</PText>
          </CardHeader>
          <PText review>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            pariatur omnis inventore magnam, non velit! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Delectus pariatur omnis inventore
            magnam, non velit!"
          </PText>
        </Card>
      </CardsWrapper>
    </ReviewsWrapper>
  );
};

export default Reviews;
