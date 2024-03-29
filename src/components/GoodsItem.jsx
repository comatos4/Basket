function GoodsItem(props) {
    const {
        id,
        name, 
        description, 
        price, 
        full_background,
        addToBasket = Function.prototype,
     } = props;

    return (
        <div className="card indigo lighten-5" id={id}>
            <div className="card-image">
                <img src={full_background} alt={name} />
            </div>
            <div className="card-content">
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button className="btn indigo lighten-1" onClick={() => addToBasket({
                    id,
                    name,
                    price,
                })}>Купить</button>
                <span className="right">{price}</span>
            </div>
        </div>
    );
}

export { GoodsItem };