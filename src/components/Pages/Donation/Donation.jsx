import DonatedCard from "./DonatedCard";


const Donation = () => {
    const donated = JSON.parse(localStorage.getItem('donated'))

    console.log(donated);
    return (
        <div>
            {
                donated.map(item => <DonatedCard key={item.id} item={item}></DonatedCard>)
            }
        </div>
    );
};

export default Donation;