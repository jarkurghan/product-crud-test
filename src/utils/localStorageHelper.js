export const getProducts = () => {
    const storage = JSON.parse(localStorage.getItem("products"));
    const defaultValue = {
        kids: [
            { id: 1, title: "Toys", price: 5, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" },
            { id: 2, title: "Car", price: 5, description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet erat egestas lobortis dictum ultricies dictumst eget netus" },
        ], mans: [{ id: 3, title: "iPhone", price: 150, description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Feugiat sociosqu ornare maecenas mauris sed purus" },
        ], womans: []
    };

    if (!storage) return saveProducts(defaultValue)
    else return storage;
};

export const saveProducts = (products) => {
    localStorage.setItem("products", JSON.stringify(products));
    return products;
};
