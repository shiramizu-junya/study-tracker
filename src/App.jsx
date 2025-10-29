function App() {
	return (
		<>
			<div>
				<span>学習内容</span>
				<input type="text" />
			</div>
			<div>
				<span>学習時間</span>
				<input type="number" />
				時間
			</div>
			<div>
				<p>入力されている学習内容: お金, 勉強, プログラミング</p>
				<p>入力されている学習時間: 0時間</p>
			</div>
      <div>
        <button>登録</button>
        <p>エラーメッセージ: 学習内容と学習時間を入力してください。</p>
      </div>
			<div>
				<p>学習記録一覧</p>
				<ul>
					<li>お金 - 2時間</li>
					<li>勉強 - 1時間</li>
					<li>プログラミング - 3時間</li>
				</ul>
			</div>
			<div>
				<p>合計学習時間: 0/1000 時間</p>
			</div>
		</>
	);
}

export default App;
