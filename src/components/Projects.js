import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaCode, FaStar, FaCodeBranch, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import config from '../config';

import wordrushImg from '../assets/wordrush.png'
import tictactoeImg from '../assets/tictactoe.png'

// ========= STYLES
const LANG_COLORS = {
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    HTML: '#e34f26',
    CSS: '#563d7c',
};
const SectionTitle = styled.h2`
    text-align: start;
    margin: 3rem 0 1.5rem;
`;

const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: flex-start;
`;
const CardContainer = styled(motion.div)`
    width: 320px;
    background: rgba(255, 255, 255, 0.22);
    backdrop-filter: blur(5px);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease;
    &:hover {
        transform: translateY(-4px);
    }
    position: relative;
    overflow: hidden;
`;
const CardBgImage = styled.img`
    position: absolute;
    inset: 0;
    width: 50%;
    left: 200px;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
    pointer-events: none;
    mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.9) 100%);
    -webkit-mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.9) 100%);
`;

const RepoName = styled.a`
    font-size: 1.1rem;
    font-weight: 600;
    color: #58a6ff;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 6px;
    &:hover { text-decoration: underline; }
`;

const Description = styled.p`
    font-size: 0.85rem;
    color: #8b949e;
    margin: 0;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

const MetaRow = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 0.8rem;
    color: #8b949e;
    flex-wrap: wrap;
`;

const LangDot = styled.span`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${p => p.color || '#ccc'};
    display: inline-block;
`;

const Badge = styled.span`
    display: inline-flex;
    align-items: center;
    gap: 4px;
`;

const TopicTag = styled.span`
    background: rgba(88, 166, 255, 0.15);
    color: #58a6ff;
    font-size: 0.75rem;
    padding: 2px 8px;
    border-radius: 12px;
`;

const HomepageLink = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 0.8rem;
    color: #58a6ff;
    text-decoration: none;
    &:hover { text-decoration: underline; }
`;

//============ ANIMATIONS
const pulse = keyframes`
    0% { opacity: 0.6; }
    50% { opacity: 1; }
    100% { opacity: 0.6; }
`;

const Skeleton = styled.div`
    width: 320px;
    height: 140px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.1);
    animation: ${pulse} 1.5s ease-in-out infinite;
`;
const IMG_MAP = {
    WordRush: wordrushImg,
    'TicTacToe-game': tictactoeImg,
};

export default function Projects() {
    const { t } = useTranslation();
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const curatedItems = config.Projects || [];
        const curatedNames = curatedItems.map(p => p.name);
        const imgMap = {};
        curatedItems.forEach(p => { imgMap[p.name] = p.img; });
        if (curatedNames.length === 0) {   
          setLoading(false);
          return;
        }
    
        fetch('https://api.github.com/users/peymanfazeli/repos?per_page=100&sort=updated')
          .then(res => {
            if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
            return res.json();
          })
          .then(allRepos => {
            const repoMap = {};
            allRepos.forEach(r => { repoMap[r.name] = r; });
    
            const ordered = curatedNames
                .map(name => {
                    const repo = repoMap[name];
                    if (repo) repo._img = IMG_MAP[repo.name];
                    return repo;
                })
                .filter(Boolean);

            setRepos(ordered);
            setLoading(false);
          })
          .catch(err => {
            setError(err.message);
            setLoading(false);
          });
      }, []);
      if (loading) {
        return (
          <div>
            <SectionTitle>{t('sections.funprojects')}</SectionTitle>
            <Grid>
              {[1,2,3,4].map(n => <Skeleton key={n} />)}
            </Grid>
          </div>
        );
      }
      if (error) {
        return (
          <div>
            <SectionTitle>{t('sections.funprojects')}</SectionTitle>
            <p style={{ color: '#f85149' }}>
              Failed to load projects: {error}
            </p>
          </div>
        );
      }
      if (repos.length === 0) {
        return (
          <div>
            <SectionTitle>{t('sections.funprojects')}</SectionTitle>
            <p style={{ color: '#8b949e' }}>No projects to show yet.</p>
          </div>
        );
      }
      return (
        <div>
          <SectionTitle>{t('sections.funprojects')}</SectionTitle>
          <Grid>
            {repos.map((repo, i) => (
              <CardContainer
                key={repo.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                {repo._img && <CardBgImage src={repo._img} alt="" />}
                {/* Repo name + link */}
                <RepoName href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  <FaGithub size={16} />
                  {repo.name}
                </RepoName>
    
                {/* Description */}
                <Description>{repo.description ? repo.description : 'No-Desc🫠' }</Description>
    
                {/* Topics */}
                {repo.topics && repo.topics.length > 0 && (
                  <MetaRow>
                    {repo.topics.map(topic => (
                      <TopicTag key={topic}>{topic}</TopicTag>
                    ))}
                  </MetaRow>
                )}
    
                {/* Meta: language, stars, forks, homepage */}
                <MetaRow>
                  {repo.language && (
                    <span>
                      <LangDot color={LANG_COLORS[repo.language] || '#ccc'} />{' '}
                      {repo.language}
                    </span>
                  )}
                  <Badge>
                    <FaStar size={12} /> {repo.stargazers_count}
                  </Badge>
                  <Badge>
                    <FaCodeBranch size={12} /> {repo.forks_count}
                  </Badge>
                  {repo.homepage && (
                    <HomepageLink href={repo.homepage} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt size={11} /> Live Demo
                    </HomepageLink>
                  )}
                </MetaRow>
              </CardContainer>
            ))}
          </Grid>
        </div>
      );
    }