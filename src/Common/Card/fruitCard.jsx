function FruitCard({id, name, image}) {
    const styles = {
        container:{
            dispplay: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },
        imageContainer :{
            flex: 3,
            display: 'flex',
        },
        image: {
            width: 50,
            height: 50,
            borderRadius: '50%'
        },
        nameContainer: {
            flex: 1,
            display: 'flex',
        },
        nameText: {
            
        }
    }

    return (
        <div style={styles.container} key={id}>
            <div style={styles.imageContainer}>
                <img src={`${image}`} style={styles.image} />
            </div>

            <div style={styles.nameContainer}>
                <span style={styles.nameText}>
                    {name}
                </span>
            </div>
        </div>
    )
}

export default FruitCard;