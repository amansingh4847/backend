const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Sample vocabulary data
const vocabularyData = [
  {
    id: 1,
    word: "Apple",
    meaning: "A fruit that grows on trees, typically red, green, or yellow",
    translation: "Manzana"
  },
  {
    id: 2,
    word: "Beautiful",
    meaning: "Pleasing to look at; attractive",
    translation: "Hermosa"
  },
  {
    id: 3,
    word: "Serendipity",
    meaning: "The occurrence of events by chance in a happy or beneficial way",
    translation: "Serendipia"
  },
  {
    id: 4,
    word: "Eloquent",
    meaning: "Fluent or persuasive in speaking or writing",
    translation: "Elocuente"
  },
  {
    id: 5,
    word: "Ephemeral",
    meaning: "Lasting for a very short time",
    translation: "Efímera"
  },
  {
    id: 6,
    word: "Melancholy",
    meaning: "A feeling of pensive sadness, typically with no obvious cause",
    translation: "Melancolía"
  },
  {
    id: 7,
    word: "Vivacious",
    meaning: "Lively and animated; full of energy",
    translation: "Vivaz"
  },
  {
    id: 8,
    word: "Ubiquitous",
    meaning: "Present, appearing, or found everywhere",
    translation: "Ubicuo"
  }
];

// GET /words - Retrieve all vocabulary words
app.get('/words', (req, res) => {
  try {
    // Optional: Add small delay to simulate real API
    setTimeout(() => {
      res.status(200).json({
        success: true,
        data: vocabularyData,
        count: vocabularyData.length
      });
    }, 100);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching vocabulary words',
      error: error.message
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running'
  });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found'
  });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: err.message
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 LingoBreeze Backend Server running on http://localhost:${PORT}`);
  console.log(`📚 Vocabulary API: http://localhost:${PORT}/words`);
});
