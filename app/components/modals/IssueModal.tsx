'use client'

import { SetStateAction, useState } from "react";
import Input from "../ui/Input";
import Dropdown from "../ui/Dropdown";
import Modal from "../ui/Modal";
import Button from "../ui/Button";

/*  For use in parent component:

// State and handler for openening and closing the issueModal.
const [issueModalOpen, setIssueModalOpen] = useState(false);

const handleIssueModalOpen = () => {
    setIssueModalOpen(!issueModalOpen)
  }

// Example of how to use IssueModal.
 <button type='button' onClick={handleIssueModalOpen}>Open IssueModal</button>
      {issueModalOpen && <IssueModal isOpen={issueModalOpen} onClose={handleIssueModalOpen} />}
    </>
    
*/

// Type for state setter functions(consider extracting to /types). 
type stateSetterType = React.Dispatch<SetStateAction<string>>

// Array of options for the dropdown.
let typeOfIssueOptions = [
    "Code Help!",
    "Placeholder",
    "Placeholder",
    "Placeholder",
];

const IssueModal: React.FC<{ isOpen: boolean; onClose: () => void; }> = ({ isOpen, onClose }) => {

    // State for the form validation via generic error message (validation not yet implemented).
    const [error, setError] = useState('')

    // State for the dropdown selection.
    const [selectedIssue, setSelectedIssue] = useState('')

    // State for the for the values of the form inputs.
    const [formData, setFormData] = useState({
        repositoryLink: '',
        relevantFiles: '',
        userGoal: '',
        userIssueDescription: '',
        userAttemptedSolution: '',
    })

    // Handler for the dropdown selection.
    const handleDropdownChange = (
        option: string
    ) => {
        setSelectedIssue(option);
    };

    // Generic handler for all form <Input/> values.
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    // Handler for submitting form.
    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault
        // Form submission code goes here.
    }

    return (
        <>
            <div className="">
                <Modal title={"Add an issue"} onClose={onClose} >
                    <div className="flex flex-col gap-4 p-6">
                        <Dropdown
                            id={"issueModalDropdown"}
                            placeholder={"Type of issue"}
                            options={typeOfIssueOptions}
                            selectedOption={selectedIssue}
                            onSelectionChange={handleDropdownChange}
                        />
                        {
                            (selectedIssue === "Code Help!" && (
                                <form onSubmit={handleFormSubmit}>
                                    <Input
                                        id={"link-to-repo"}
                                        label={"Link to your repository"}
                                        type="text"
                                        name="repositoryLink"
                                        value={formData.repositoryLink}
                                        onChange={handleInputChange}
                                        disabled={false}
                                        readOnly={false}
                                        error={''}
                                        size="medium"

                                    ></Input>
                                    <Input
                                        id={"relevant-files"}
                                        label={"List the files that are relevant to your issue"}
                                        type="text"
                                        name='relevantFiles'
                                        value={formData.relevantFiles}
                                        onChange={handleInputChange}
                                        disabled={false}
                                        readOnly={false}
                                        error={''}
                                        size="large"
                                    ></Input>
                                    <Input
                                        id={"user-goal"}
                                        label={"What are you trying to accomplish?"}
                                        type="text"
                                        name='userGoal'
                                        value={formData.userGoal}
                                        onChange={handleInputChange}
                                        disabled={false}
                                        readOnly={false}
                                        error={''}
                                        size="large"
                                    ></Input>
                                    <Input
                                        id={"user-issue-description"}
                                        label={"List any unexpected behavior with your code"}
                                        type="text"
                                        name='userIssueDescription'
                                        value={formData.userIssueDescription}
                                        onChange={handleInputChange}
                                        disabled={false}
                                        readOnly={false}
                                        error={''}
                                        size="large"
                                    ></Input>
                                    <Input
                                        id={"attempted-solution"}
                                        label={"What have you tried?"}
                                        type="text"
                                        name='userAttemptedSolution'
                                        value={formData.userAttemptedSolution}
                                        onChange={handleInputChange}
                                        disabled={false}
                                        readOnly={false}
                                        error={''}
                                        size="large"
                                    ></Input>
                                </form>
                            ))
                        }
                    </div>
                    <div className="flex justify-end">
                        {selectedIssue && <Button type='submit' title="Create"></Button>}
                    </div>
                </Modal>
            </div>
        </>
    );
};

export default IssueModal