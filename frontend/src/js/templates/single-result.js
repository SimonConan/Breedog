module.exports = `
<div class="result">
    <div class="image">
        <img src="{{ imageUrl }}" alt="{{ name }}">
    </div>
    <div class="description">
        <h3>{{ name }}</h3>
        <p><span>{{ score }}%</span> d'affinité</p>
        <ul>
            <li>{{ criteria1 }}</li>
            <li>{{ criteria2 }}</li>
            <li>{{ criteria3 }}</li>
        </ul>
        <a href="{{ originalLink }}"><span class="button">Plus d'infos</span></a>
    </div>
</div>
`;