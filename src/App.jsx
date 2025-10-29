import { useState } from 'react';

const records = [
	{ title: '勉強の記録1', time: 1 },
	{ title: '勉強の記録2', time: 3 },
	{ title: '勉強の記録3', time: 5 },
];

function App() {
	const [learningContent, setLearningContent] = useState('');
	const [learningTime, setLearningTime] = useState('0');
	const [studyRecords, setStudyRecords] = useState(records);
	const [isError, setIsError] = useState(false);

	const totalStudyTime = studyRecords.reduce((total, record) => total + record.time, 0);

	const handleRegistration = () => {
		if (!learningContent || !learningTime || learningTime === '0') {
			setIsError(true);
		} else {
			setIsError(false);
			const newRecord = { title: learningContent, time: Number(learningTime) };
			setStudyRecords([...studyRecords, newRecord]);
			setLearningContent('');
			setLearningTime('0');
		}
	};

	return (
		<>
			<div>
				<span>学習内容</span>
				<input
					type="text"
					value={learningContent}
					onChange={(e) => setLearningContent(e.target.value)}
				/>
			</div>
			<div>
				<span>学習時間</span>
				<input
					type="number"
					min={0}
					value={learningTime}
					onChange={(e) => setLearningTime(e.target.value)}
				/>
				時間
			</div>
			<div>
				<p>入力されている学習内容: {learningContent}</p>
				<p>入力されている学習時間: {learningTime}時間</p>
			</div>
			<div>
				<button onClick={handleRegistration}>登録</button>
				<p>{isError && '入力されていない項目があります。'}</p>
			</div>
			<div>
				<p>学習記録一覧</p>
				<ul>
					{studyRecords.map((record, index) => (
						<li key={index}>
							{record.title} - {record.time}時間
						</li>
					))}
				</ul>
			</div>
			<div>
				<p>合計学習時間: {totalStudyTime}/1000 時間</p>
			</div>
		</>
	);
}

export default App;
