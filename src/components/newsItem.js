import React from "react";
import { Card, Button } from "react-bootstrap";

export default function NewsItem(props) {
  return (
    <div>
      <Card >
        <Card.Img style={{ height: "18rem" }} variant="top" src={props.imgURL?props.imgURL:"https://images.macrumors.com/t/kzf8tIaAMi1IBwHm5-Bypdd0RlY=/2000x/article-new/2022/01/netgear-nighthawk-raxe300.jpg"} />
        <Card.Body>
          <Card.Title>{props.title?props.title.slice(0,45):"Title unavailable for now "}</Card.Title>
          <Card.Text>{props.description?props.description.slice(0,88):"There is no description available for this news so if you want to read article click on 'read more'"}</Card.Text>
          <Button href={props.newsUrl} variant="dark" className="btn-sm" >Read More</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
