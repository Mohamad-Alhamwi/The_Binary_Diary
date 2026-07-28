import PropTypes from 'prop-types';

import styles from './styles.module.css';

/**
 * Displays a larger introductory paragraph at the beginning of a blog post.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Introductory blog post content.
 * @returns {JSX.Element}
 */
export default function BlogPostIntro({ children }) {
    return (
        <div className={styles.blogPostIntro}>
            {children}
        </div>
    );
}

BlogPostIntro.propTypes = {
    children: PropTypes.node.isRequired,
};