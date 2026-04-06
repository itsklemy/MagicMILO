import { useState, useCallback } from 'react';

/**
 * useFlow — Gère la logique de navigation dans un flow conversationnel.
 * @param {object} flowData - Données du flow (depuis flows/xxx.json)
 * @returns {object} - État et fonctions du flow
 */
export function useFlow(flowData) {
  const [currentNodeId, setCurrentNodeId] = useState('start');
  const [history, setHistory] = useState([]); // Historique des nodes visités
  const [selectedPath, setSelectedPath] = useState([]); // Options choisies par l'enfant
  const [isComplete, setIsComplete] = useState(false);

  const currentNode = flowData?.nodes?.[currentNodeId];

  /**
   * Avancer au node suivant (sans choix)
   */
  const advance = useCallback(() => {
    if (!currentNode?.next) {
      setIsComplete(true);
      return;
    }
    setHistory(prev => [...prev, currentNodeId]);
    setCurrentNodeId(currentNode.next);
  }, [currentNode, currentNodeId]);

  /**
   * Choisir une option dans un node de type question
   * @param {object} option - L'option choisie { id, label, next }
   */
  const choose = useCallback((option) => {
    setSelectedPath(prev => [...prev, option.id]);
    setHistory(prev => [...prev, currentNodeId]);
    setCurrentNodeId(option.next);
  }, [currentNodeId]);

  /**
   * Revenir en arrière
   */
  const goBack = useCallback(() => {
    if (history.length === 0) return;
    const prev = history[history.length - 1];
    setHistory(h => h.slice(0, -1));
    setSelectedPath(p => p.slice(0, -1));
    setCurrentNodeId(prev);
    setIsComplete(false);
  }, [history]);

  /**
   * Réinitialiser le flow
   */
  const reset = useCallback(() => {
    setCurrentNodeId('start');
    setHistory([]);
    setSelectedPath([]);
    setIsComplete(false);
  }, []);

  // Calculer le numéro d'étape approximatif pour ProgressDots
  const stepIndex = history.length;
  const estimatedTotal = 6; // Environ 6 étapes par flow

  return {
    currentNode,
    currentNodeId,
    history,
    selectedPath,
    isComplete,
    advance,
    choose,
    goBack,
    reset,
    stepIndex,
    estimatedTotal,
    canGoBack: history.length > 0,
  };
}
