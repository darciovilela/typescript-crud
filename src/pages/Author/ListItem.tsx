import { Author } from '../../interfaces/RecordEntities';
import { ListItemProps } from '../../interfaces/PagesProps';

type IProps = ListItemProps<Author>;

export const AuthorListItem: React.FC<IProps> = ({ record }) => {
	return (
		<div>
			<div className="author">By {record.name}</div>
		</div>
	);
};
