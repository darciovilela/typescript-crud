import { Record } from '../../interfaces/RecordEntities';
import { RecordIndexProps } from '../../interfaces/PagesProps';
import { useFetch } from '../../hooks/useFetch';
import { RecordList } from './List';
import { RecordMutations } from './Mutations';
import { useState } from 'react';

export const RecordIndex = <T extends Record>({
	ListItem,
	apiPath,
	apiOptions,
	FormFields,
	emptyRecord,
}: RecordIndexProps<T>) => {
	const [activeRecord, setActiveRecord] = useState<T>(emptyRecord);
	const { records } = useFetch<T>(apiPath, apiOptions);

	return (
		<div className="page">
			<div className="content">
				<RecordList<T>
					ListItem={ListItem}
					records={records}
					emptyRecord={emptyRecord}
					activeRecord={activeRecord}
					setActiveRecord={setActiveRecord}
				/>
				<RecordMutations<T>
					FormFields={FormFields}
					activeRecord={activeRecord}
				/>
			</div>
		</div>
	);
};
