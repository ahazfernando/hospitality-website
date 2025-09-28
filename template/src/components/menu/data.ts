export interface MenuItem {
    name: string;
    description: string;
    price: string;
    image: string;
    tags?: string[];
}

export interface MenuCategory {
    [key: string]: MenuItem[];
}

export const chefRecommendation: MenuItem = {
    name: 'Truffle Risotto',
    description: 'Creamy Arborio rice with black truffle, Parmesan cheese, and a hint of wild mushroom. A true delicacy.',
    price: '$32',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    tags: ['🌱', 'GF'],
};

export const menuData: MenuCategory = {
    "Starters": [
        { 
            name: 'Bruschetta', 
            description: 'Grilled bread with tomatoes, garlic, basil, and olive oil.', 
            price: '$12', 
            image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 
            tags: ['🌱', 'V'] 
        },
        { 
            name: 'Calamari Fritti', 
            description: 'Lightly battered and fried squid, served with marinara sauce.', 
            price: '$15', 
            image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' 
        },
    ],
    "Main Courses": [
        { 
            name: 'Spaghetti Carbonara', 
            description: 'Pasta with pancetta, eggs, pecorino cheese, and black pepper.', 
            price: '$22', 
            image: 'https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' 
        },
        { 
            name: 'Margherita Pizza', 
            description: 'Classic pizza with tomato, mozzarella, and fresh basil.', 
            price: '$18', 
            image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 
            tags: ['🌱'] 
        },
        { 
            name: 'Grilled Salmon', 
            description: 'Salmon fillet with roasted vegetables and lemon-dill sauce.', 
            price: '$28', 
            image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 
            tags: ['GF'] 
        },
    ],
    "Desserts": [
        { 
            name: 'Tiramisu', 
            description: 'Coffee-flavored Italian dessert.', 
            price: '$10', 
            image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' 
        },
        { 
            name: 'Panna Cotta', 
            description: 'Sweetened cream thickened with gelatin and molded.', 
            price: '$9', 
            image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 
            tags: ['GF'] 
        },
    ],
    "Drinks": [
        { 
            name: 'House Red Wine', 
            description: 'A glass of our finest selection.', 
            price: '$8', 
            image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' 
        },
        { 
            name: 'Sparkling Water', 
            description: 'Imported from the Italian Alps.', 
            price: '$4', 
            image: '/sparkling.webp'
        },
    ],
};