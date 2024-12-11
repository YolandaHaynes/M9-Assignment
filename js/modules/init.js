export async function jsonEmployees() {
    try {
        const response = await fetch('js/data/employees.json');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const employees = await response.json();
        return employees;
    } catch (error) {
        console.error('Error loading employees:', error);
        return [];
    }
}
