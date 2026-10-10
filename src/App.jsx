import { useState } from 'react'
import { categories, faqs } from './faqData'
import './App.css'

function App() {
  const [openFaqId, setOpenFaqId] = useState(null)
  const [chatOpen, setChatOpen] = useState(false)
  const [categoryId, setCategoryId] = useState(categories[0].id)

  const selectedCategory = categories.find((c) => c.id === categoryId)

  return (
    <div className="page">
      <header className="header">
        <h1>사내 FAQ 챗봇</h1>
        <p className="notice">현재 더미 데이터로 동작합니다.</p>
      </header>

      <main className="faq">
        <h2>자주 묻는 질문</h2>
        <ul className="faq-list">
          {faqs.map((faq) => (
            <li key={faq.id}>
              <button
                type="button"
                className="faq-question"
                onClick={() => setOpenFaqId(openFaqId === faq.id ? null : faq.id)}
              >
                {faq.question}
              </button>
              {openFaqId === faq.id && (
                <div className="faq-detail">
                  <p>{faq.answer}</p>
                  <p className="faq-source">출처: {faq.source}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </main>

      {chatOpen && (
        <section className="chat-panel">
          <h2>분야를 선택하세요</h2>
          <div className="category-tabs">
            {categories.map((c) => (
              <button
                type="button"
                key={c.id}
                className={c.id === categoryId ? 'tab active' : 'tab'}
                onClick={() => setCategoryId(c.id)}
              >
                {c.name}
              </button>
            ))}
          </div>
          <p className="chat-hint">{selectedCategory.name} 분야 안에서만 답합니다. 질문 예시:</p>
          <ul className="example-list">
            {selectedCategory.examples.map((ex) => (
              <li key={ex}>{ex}</li>
            ))}
          </ul>
        </section>
      )}

      <button type="button" className="chat-button" onClick={() => setChatOpen(!chatOpen)}>
        {chatOpen ? '닫기' : '채팅'}
      </button>
    </div>
  )
}

export default App
