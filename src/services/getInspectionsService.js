// Haal inspecties op en return ze
export default async function getInspections() {
    const response = await fetch('https://my-json-server.typicode.com/danieltreep/RealEstateCare/inspections')
    const json = await response.json();
    return json;     
}