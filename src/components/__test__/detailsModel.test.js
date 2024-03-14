import { render, screen } from '@testing-library/react';
import DetailsModel from '../detailsModel';

const testData = {
    name: 'test_name', 
    height: 'test_height',
    gender: 'test_gender'
};


describe('Modal Component', () => {
    test('Should not get name of user if Modal is not Open', () => {
        render(<DetailsModel characterDetails={testData} />);

        // As is Open property is set to false
        const dialogElement = screen.queryByText(testData.name);
        expect(dialogElement).not.toBeInTheDocument();
    });

    test('Should get name of user if Modal is Open', () => {
        render(<DetailsModel characterDetails={testData} open />);

        const dialogElement = screen.queryByText(testData.name);
        expect(dialogElement).toBeInTheDocument();
    });
});
