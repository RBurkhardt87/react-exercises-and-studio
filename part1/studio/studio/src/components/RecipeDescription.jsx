import { Component } from "react";
import RecipeAuthor from "./Description";


export default class RecipeDescription extends Component {
    render () {
        return (
            <div> 
            <div>
                <h1>One Pot Mediterranean Chicken and Rice</h1>
                <p>Save time (and dishes) with this one pot recipe. This fast and easy dish will be sure to please the whole family. It uses fresh Parsley and lemon to lighten and brighten your dinner table. It takes only 30 minutes to marinade and prep this dish. And in the oven it goes for another 50 minutes-- giving you the perfect amount of time to relax after work or even help the kiddos with some homework before dinner.  </p>
            </div>
            <RecipeAuthor />
            </div>
        );
    };
};

