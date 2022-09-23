import { FormFieldsProps } from '../../interfaces/PagesProps';
import { Author } from '../../interfaces/RecordEntities';

type IProps = FormFieldsProps<Author>;

export const AuthorFormFields: React.FC<IProps> = ({
	formState,
	handleChange,
}) => {
	return (
		<div>
			<div>
				<label>Name</label>
				<input
					type="text"
					name="name"
					value={formState.name}
					onChange={handleChange}
				></input>
			</div>
		</div>
	);
};
