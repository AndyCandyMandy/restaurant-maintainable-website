

function AdminDisplayMenu({ categories }) { 


    return ( 
        <> 
            <h1>Edit Menu</h1>

            <div>
                {categories.map((categoryData, index) => (
                    <div key={index}>
                        <h3>{categoryData.categoryName}</h3>

                        <div>
                            
                        </div>
                    </div>    
                ))}
            </div>

        </>  
    );
} 

export default AdminDisplayMenu;