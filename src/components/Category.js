import React, { useState, useEffect } from 'react'
import axios from 'axios';
const Category = () => {
    const [activeCategory, setActiveCategory] = useState('');
    const [meals, setMeals] = useState([]);
    const categories = [
        { name: 'DESSERT', apiValue: 'Dessert' },
        { name: 'SEAFOOD AND MEAT', apiValue: 'seafood' },
        { name: 'VEGETARIAN', apiValue: 'vegetarian' },
        { name: 'BREAKFAST', apiValue: 'breakfast' }

    ];
    useEffect(() => {
        if (activeCategory) {
            const category = categories.find(cat => cat.name === activeCategory).apiValue;

            if (category) {
                axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
                    .then(response => {
                        setMeals(response.data.meals || []);
                    })
                    .catch(error => {
                        console.error('Error fetching data:', error);
                    });
            }
        }


    }, [activeCategory, categories]);

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    };



    return (
        <div className='category-container'>
            <div className='category-content'>
                <h3>Shop by Category</h3>
                <h2>Top Category Of Organic Food</h2>

                <div className="btns">
                    <button
                        className={`cat-btn ${activeCategory === 'DESSERT' ? 'active' : ''}`}
                        onClick={() => handleCategoryClick('DESSERT')}
                    >
                        DESSERT
                    </button>
                    <button
                        className={`cat-btn ${activeCategory === 'SEAFOOD AND MEAT' ? 'active' : ''}`}
                        onClick={() => handleCategoryClick('SEAFOOD AND MEAT')}
                    >
                        SEAFOOD AND MEAT
                    </button>
                    <button
                        className={`cat-btn ${activeCategory === 'VEGETARIAN' ? 'active' : ''}`}
                        onClick={() => handleCategoryClick('VEGETARIAN')}
                    >
                        VEGETARIAN
                    </button>
                    <button
                        className={`cat-btn ${activeCategory === 'BREAKFAST' ? 'active' : ''}`}
                        onClick={() => handleCategoryClick('BREAKFAST')}
                    >
                        BREAKFAST
                    </button>

                </div>

                <div className="meal-cont">

                    <div className='meals-container'>
                        {meals.length > 0 ? (
                            meals.map(meal => (
                                <div key={meal.idMeal} className='meal'>
                                    <img src={meal.strMealThumb} alt={meal.strMeal} className='category-img' />
                                    <div className="flex-col">
                                        <div className="title-price">

                                            <p className='meal-title'>{meal.strMeal}</p>
                                            <p>$8.45</p>
                                        </div>
                                        <div className="desc-btn">

                                        <p className='meal-des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quis.</p>
                                        <button className='meal-shopbtn'>SHOP NOW <i class="fa-solid fa-arrow-right"></i></button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>Select a category to see meals</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category