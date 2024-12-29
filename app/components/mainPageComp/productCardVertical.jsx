import { Card, Badge } from "react-bootstrap";

export default function productCardVertical() {
  const product = [
    {
      code: 101,
      name: "Iphone 13 128 GB",
      imageUrl: "https://cdn.akakce.com/x/apple/iphone-13.jpg",
      dropRatio: 5,
      price: 20567,
      countOfPrices: 96,
      followCount: 5000,
      url: "https://mock.akakce.dev/product101.json",
    },
  ];
  const item = product[0];
  return (
    <div className="product-card" style={{ width: "18rem", margin: "1rem" }} >
      <Card className="shadow-sm border-0">
        <Card.Body>
          <Badge
            pill
            bg="danger"
            className="position-absolute top-0 start-0 mt-2 ms-2"
          >
            %{item.dropRatio}
          </Badge>

          <div className="text-center">
            <Card.Img
              variant="top"
              src={item.imageUrl}
              alt="Ürün Resmi"
              style={{ maxHeight: "150px", objectFit: "contain" }}
            />
          </div>
          <Card.Title className="mt-3 text-primary">{item.name}</Card.Title>
          <Card.Text>
            <strong style={{ fontSize: "1.5rem" }}>
              {item.price.toLocaleString()} TL
            </strong>
          </Card.Text>
          <Card.Text className="text-muted">
            {item.countOfPrices} satıcı &gt;
          </Card.Text>
          <Card.Text className="text-muted">
            {item.followCount}+ takip
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
