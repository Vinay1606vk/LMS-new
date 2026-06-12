/**
 * Quiz Generator - API-based implementation
 * 
 * This module handles quiz data fetching from the backend API.
 * Hard-coded data has been removed in favor of dynamic API calls.
 */

import { quizAPI } from '../services/api';

/**
 * Fetch quiz by ID from the backend
 */
export const getQuizById = async (quizId: string) => {
  try {
    return await quizAPI.getQuiz(quizId);
  } catch (error) {
    console.error('Failed to fetch quiz:', error);
    throw error;
  }
};

/**
 * Fetch quizzes for a specific topic from the backend
 */
export const getQuizzesByTopic = async (topicId: string) => {
  try {
    return await quizAPI.getQuizzesByTopic(topicId);
  } catch (error) {
    console.error('Failed to fetch quizzes for topic:', error);
    throw error;
  }
};

/**
 * Submit quiz attempt and get results
 */
export const submitQuiz = async (
  quizId: string,
  responses: Array<{ questionId: string; selectedOptionId?: string }>
) => {
  try {
    return await quizAPI.submitQuizAttempt(quizId, responses);
  } catch (error) {
    console.error('Failed to submit quiz:', error);
    throw error;
  }
};

/**
 * Fetch quiz results for a student
 */
export const getQuizResults = async (studentId: string) => {
  try {
    return await quizAPI.getQuizResults(studentId);
  } catch (error) {
    console.error('Failed to fetch quiz results:', error);
    throw error;
  }
};

// Type exports for better type safety
export type { Quiz, QuizQuestion, QuizOption } from '../store/types';
