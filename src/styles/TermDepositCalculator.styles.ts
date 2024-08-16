import styled from 'styled-components';

export const CalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  max-width: 500px;
  margin: 20px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 1.5rem;
  color: #333;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 5px;
  color: #444;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Select = styled.select`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #ff7a64;
  color: #fff;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(255, 239, 107);
    color: #000;
  }
`;

export const Result = styled.div`
  margin-top: 20px;
  font-size: 1.2rem;
  color: #333;
  font-weight: bold;
`;