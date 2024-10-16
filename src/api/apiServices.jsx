//Get dishes
export const getDishes = async () => {
    try {
        const response = await fetch("http://localhost:3000/dishes");
        if (response.ok) {
            let dishes = await response.json();
            console.log(dishes);
            return dishes;
        }
    }
    catch (error) {
        console.log(error);
        return null;
    }
}

// Get dish by ID
export const getDish = async (id) => {
    try {
        const response = await fetch("http://localhost:3000/dishes/"+id);
        if (response.ok) {
            let dishes = await response.json();
            console.log(dishes);
            return dishes;
        }
    }
    catch (error) {
        console.log(error);
        return null;
    }
}

//Post dish
export const postDish = async (dish) => {
    try {
        const response = await fetch("http://localhost:3000/dishes", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dish)
        });
    }
    catch (error) {
        console.log(error);
    }
}

//Put dish
export const putDish = async (dish) => {
    try {
        const response = await fetch(`http://localhost:3000/dishes/${dish.id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dish)
        });
        if (response.ok) {
            let tasks = await response.json();
            console.log(dishes);
        }
    }
    catch (error) {
        console.log(error);
    }
}

//Delete dish
export const deleteDish = async (dish) => {
    try {
        const response = await fetch(`http://localhost:3000/dishes/${dish}`, {
            method: 'DELETE'
        });
    }
    catch (error) {
        console.log(error);
    }
}