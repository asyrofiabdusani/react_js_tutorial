import { Component } from "react";
import Card from "../layout/Card";

class ProductList extends Component {
    render() {
        return (
            <div class="container">
                <Card
                    title="Produk 1"
                    desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit"
                    strip_price="120.000"
                    price="100.000"
                />
                <Card
                    title="Produk 1"
                    desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit"
                    strip_price="120.000"
                    price="100.000"
                />
                <Card
                    title="Produk 1"
                    desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit"
                    strip_price="120.000"
                    price="100.000"
                />
            </div>
        );
    }
}

export default ProductList;
