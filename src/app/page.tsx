import Link from 'next/link'

export default function Home() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Web Vitals Comparison</h1>
      
      <div className="grid gap-6">
        <div className="border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Client-side Form</h2>
          <p className="text-gray-600 mb-4">
            useStateを使用したReactらしいフォーム。全データ取得後に表示。
          </p>
          <Link 
            href="/form-client"
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            View Client Form
          </Link>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Server Component Form</h2>
          <p className="text-gray-600 mb-4">
            Server Componentを使った静的なフォーム。サーバーサイドで全データを取得。
          </p>
          <Link 
            href="/form-server"
            className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            View Server Form
          </Link>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Streaming Form</h2>
          <p className="text-gray-600 mb-4">
            静的部分を即座に表示し、オプション項目のみSuspenseでストリーミング。
          </p>
          <Link 
            href="/form-streaming"
            className="inline-block bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
          >
            View Streaming Form
          </Link>
        </div>
      </div>

      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <h3 className="font-semibold mb-2">Web Vitals測定方法:</h3>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>開発者ツールのNetworkタブでスロットリングを設定</li>
          <li>各フォームを新しいタブで開く</li>
          <li>Lighthouseでパフォーマンス測定</li>
          <li>コンソールでWeb Vitalsの値を確認</li>
        </ol>
      </div>
    </div>
  )
}
