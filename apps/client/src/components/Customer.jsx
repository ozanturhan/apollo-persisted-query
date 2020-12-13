import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';

const customerQuery = loader('../queries/customer.graphql');

export const Customers = () => {
  const { loading, error, data } = useQuery(customerQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.Customer.map(({ id, name }) => (
    <div key={id}>
      <p>
        {id}: {name}
      </p>
    </div>
  ));
};
