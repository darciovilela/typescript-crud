import { Record } from '../../interfaces/RecordEntities';
import { RecordNewProps } from '../../interfaces/PagesProps';
import { RecordForm } from './Form';
import { create } from 'domain';

export const RecordNew = <T extends Record>({
	FormFields,
	activeRecord,
	create,
	success,
}: RecordNewProps<T>) => {
	return (
		<div className="new">
			<h2>New</h2>
			<RecordForm
				FormFields={FormFields}
				activeRecord={activeRecord}
				submitAction={create}
			/>
		</div>
	);
};
