export default function getInspections() {
    let inspections = '';

    fetch('https://my-json-server.typicode.com/danieltreep/RealEstateCare/inspections')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            inspections = data;
        })
        .catch(error => console.error(error))
    console.log('from services '  + inspections)
    return inspections;
}