const mysql = require('mysql2');

exports.handler = async (event) => {
  // Configure MySQL connection
  const connection = mysql.createConnection({
    host: 'database-1-instance-1.cblbuezebwrn.us-west-2.rds.amazonaws.com',
    user: 'admin',
    password: 'your-rds-password',
    database: 'your-rds-database',
  });

  // Connect to the database
  connection.connect();

  try {
    // Perform database operations
    // Example: Select all customers from the 'customers' table
    const query = 'SELECT * FROM customers';
    const [rows, fields] = await connection.promise().query(query);

    // Process the retrieved data
    const customers = rows.map((row) => ({
      id: row.id,
      name: row.name,
      streetNumber: row.street_number,
      city: row.city,
      state: row.state,
      zipCode: row.zip_code,
      phone: row.phone,
      marketingChannels: JSON.parse(row.marketing_channels),
      bidTotal: row.bid_total,
      completedProjectTotal: row.completed_project_total,
      projectTypes: JSON.parse(row.project_types),
    }));

    // Return the response
    return {
      statusCode: 200,
      body: JSON.stringify(customers),
    };
  } catch (error) {
    console.error('Error executing database query:', error);
    // Return an error response
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal server error' }),
    };
  } finally {
    // Close the database connection
    connection.end();
  }
};

